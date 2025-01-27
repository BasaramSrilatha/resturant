<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            background-image: url('startpage.jpg');
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            height: 100vh;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            color: black;
            font-family: 'Arial Narrow';
            flex-direction: column;
            position: relative;
        }

        h1 {
            font-size: 150px;
            text-shadow: 2px 2px 4px black;
            margin-bottom: 120px;
            position: absolute;
            z-index: 2;
            transform: translateX(-25px);
            font-weight: 300;
        }

        .circle {
            width: 130px;
            height: 130px;
            background-color: transparent;
            border: 5px solid black;
            border-radius: 50%;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
            position: absolute;
            z-index: 1;
            animation: animateCircle 3s ease-in-out infinite;
        }

        @keyframes animateCircle {
            0% {
                transform: scale(0.5);
                border-color: black;
            }
            50% {
                transform: scale(1.2);
                border-color: black;
            }
            100% {
                transform: scale(1);
                border-color: black;
            }
        }

        header {
            background-color: #333;
            color: #fff;
            padding: 1em 1.5em;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 3;
            border-radius: 0 0 0 10px;
        }

        nav ul {
            list-style: none;
            display: flex;
            justify-content: flex-end;
            margin: 0;
            padding: 0;
        }

        nav ul li {
            margin: 0 10px;
        }

        nav ul li a {
            text-decoration: none;
            color: #fff;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="firstpage.html">Home</a></li>
                <li><a href="menu.html">Menu</a></li>
                <li><a href="third.html">Gallery/Bookings</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="second.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    <h1>Doof</h1>
    <div class="circle"></div>
    <div></div>
</body>
</html>
