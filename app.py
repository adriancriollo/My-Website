from flask import Flask, render_template

# Create an instance of the Flask class
app = Flask(__name__)

# Define a route and associated view function
@app.route('/')
def index():
    name = 'John'  # Example parameter

    # Render the template and pass parameters
    return render_template('index.html', name=name)

# Run the Flask applications
if __name__ == '__main__':
    app.run()
