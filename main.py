from jinja2 import Environment, FileSystemLoader

# Create an environment using the current directory as the template directory
env = Environment(loader=FileSystemLoader('.'))

# Define the parameters to pass to the template
parameters = {
    'name': 'John',
}

# Render the template with the provided parameters
template = env.get_template('index.html')
output = template.render(parameters)

# Print or use the rendered output as needed
print(output)
