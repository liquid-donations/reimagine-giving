import json

import click
import liquid_donations.amc as amc


@click.command()
@click.argument('filename', type=click.File('r'))
def cli(filename):
    data = json.load(filename)
    matrix = amc.generate_matrix(data)
    sorted_matrix = amc.sort_matrix(matrix)
    steady_state = amc.get_steady_state(matrix)
    click.echo()
    click.echo(sorted_matrix)
    click.echo()
    click.echo(steady_state)


if __name__ == '__main__':
    cli()
