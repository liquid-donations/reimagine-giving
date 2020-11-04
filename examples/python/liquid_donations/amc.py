import numpy as np
import pandas as pd


def print_matrix(matrix):
    pd.set_option('display.max_rows', len(matrix))
    print()
    print(matrix)


def normalize(matrix):
    return matrix.div(matrix.sum(axis=1), axis=0)


def generate_matrix(data):
    key_set = set(data.keys())
    for edges in data.values():
        keys = edges.keys()
        key_set.update(keys)

    all_keys = sorted(list(key_set))
    for key in all_keys:
        if key not in data:
            data[key] = {key: 1}

    matrix_list = []
    for key in all_keys:
        edges = data[key]
        row = []
        # sum_of_row = sum(edges.values())
        for key2 in all_keys:
            # value = Fraction(edges.get(key2, 0), sum_of_row)
            value = edges.get(key2, 0)
            row.append(value)
        matrix_list.append(row)

    matrix = pd.DataFrame(
        data=matrix_list,
        index=all_keys,
        columns=all_keys,
    )
    result = normalize(matrix).astype('float')
    return result


def find_absorbing_rows(matrix):
    result = []
    for index, row in enumerate(matrix.iterrows()):
        values = row[1].values
        if values[index] == 1:
            result.append(row[0])
    return result


def sort_states(matrix):
    all_states = list(matrix.index.values)
    absorbing = find_absorbing_rows(matrix)
    transition = [name for name in all_states if name not in absorbing]
    return transition, absorbing


def sort_matrix(matrix):
    # sort the matrix
    transition, absorbing = sort_states(matrix)
    sorted_states = transition + absorbing
    sorted_matrix = matrix.reindex(index=sorted_states, columns=sorted_states)
    return sorted_matrix


def decompose(matrix):
    # sort the matrix
    transition, absorbing = sort_states(matrix)
    sorted_states = transition + absorbing
    sorted_matrix = matrix.reindex(index=sorted_states, columns=sorted_states)

    matrix_size = len(matrix)
    t_size = len(transition)
    q_matrix = sorted_matrix.iloc[0:t_size, 0:t_size]
    r_matrix = sorted_matrix.iloc[0:t_size, t_size:matrix_size]
    return q_matrix, r_matrix


# result = calculate_b(drunk_walk_example)
def get_steady_state(matrix):
    q, r = decompose(matrix)
    i = np.identity(len(q))

    q = q.mul(-1)
    q = q.add(i)
    v = np.linalg.inv(q)
    result = np.matmul(v, r)
    return result
