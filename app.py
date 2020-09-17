from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/IPCamera')
def IPcamera():
    return render_template('IPCamera.html')

@app.route('/IRCamera')
def IRcamera():
    return render_template('IRCamera.html')

@app.route('/Lidar')
def Lidar():
    return render_template('Lidar.html')



if __name__ == "__main__":
    app.run(debug=True)







