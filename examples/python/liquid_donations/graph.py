from graphviz import Digraph

colors = ["#ff7675", "#fdcb6e", "#74b9ff", "#a29bfe", "#fd79a8", "#81ecec"]

def get_all_names(data):
    result = set(data.keys())
    for value in data.values():
        result.update(value.keys())
    return result

def get_charity_names(data):
    return sorted(list(set(get_all_names(data) - data.keys())))

def generate_graph(data, output):
    users = sorted(data.keys())
    charities = get_charity_names(data)
    g = Digraph('G', filename=output)
    g.attr(rankdir='LR', overlap='scale', newrank='true', fontname='helvetica')
    g.attr('node', fontname='helvetica')

    with g.subgraph(name='users') as c:
        c.attr(
            'node',
            shape='square',
            style='rounded,filled',
            width="0.8",
            fixedsize="true",
            rankdir='LR',
        )
        c.graph_attr['rankdir'] = 'LR'

        for index,user in enumerate(users):
            color = colors[index % len(colors)]
            c.node(user, color=color)

    with g.subgraph(name='charities') as c:
        c.attr('node',
            shape='circle',
            style='rounded,filled',
            width="0.9",
            color="#00b894",
            fixedsize="true",
            rankdir="TB",
            )
        c.graph_attr['rankdir'] = 'TB'
        c.graph_attr['rank'] = 'same'
        for index,charity in enumerate(charities):
            c.node(charity)

    g.attr('edge', arrowhead="diamond", color="#808080", fontname='helvetica')
    for user,values in data.items():
        for destination,percent in values.items():
            g.edge(user, destination, label=f"{percent}%")
    return g
