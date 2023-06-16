from flask import Flask, render_template, request, jsonify
import os 
current_dir =  os.getcwd()
# Create an instance of the Flask class
app = Flask(__name__,template_folder=current_dir)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate_sum', methods=['POST'])
def calculate_sum():
    num1 = float(request.form['num1'])
    num2 = float(request.form['num2'])
    result = num1 + num2
    return jsonify({'sum': result})

if __name__ == '__main__':
    app.run()
