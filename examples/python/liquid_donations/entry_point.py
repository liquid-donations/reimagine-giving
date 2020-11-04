import json

import click
import liquid_donations.amc as _amc
import liquid_donations.graph as _graph

@click.group()
def cli():
    """ Command line tools for Liquid Donations. """
    pass

@cli.command()
@click.argument('filename', type=click.File('r'))
def calculate(filename):
    """ Calculate the Absorbing Markov Chain."""
    data = json.load(filename)
    matrix = _amc.generate_matrix(data)
    sorted_matrix = _amc.sort_matrix(matrix)
    steady_state = _amc.get_steady_state(matrix)
    _amc.print_matrix(sorted_matrix)
    _amc.print_matrix(steady_state)


@cli.command()
@click.argument('filename', type=click.File('r'))
@click.option('--output', '-o', default="output.gv")
@click.option('--verbose/--silent', '-v/-s', default=True)
def graph(filename, output, verbose):
    """ Render a picture of the graph."""
    data = json.load(filename)
    graph = _graph.generate_graph(data, output)
    graph.render(format='png', view=verbose)


if __name__ == '__main__':
    cli()
