from flask import Flask, render_template, request, redirect, url_for, flash
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'your_secret_key'

users = {}  # This should be a database in production

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    if username in users and check_password_hash(users[username], password):
        flash('Login successful!', 'success')
    else:
        flash('Invalid username or password', 'error')
    return redirect(url_for('index'))

@app.route('/register', methods=['POST'])
def register():
    username = request.form['username']
    password = request.form['password']
    if username in users:
        flash('Username already exists!', 'error')
    else:
        hashed_password = generate_password_hash(password)
        users[username] = hashed_password
        flash('Registration successful! Please log in.', 'success')
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
