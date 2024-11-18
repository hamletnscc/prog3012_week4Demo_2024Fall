
# IoT Device Inventory Manager

A simple web application to manage IoT devices. This project demonstrates the use of **Node.js**, **Express**, **SQLite**, and basic HTML/CSS/JavaScript to create a CRUD (Create, Read, Update, Delete) web application.

---

## Features

- View a list of IoT devices.
- Add a new IoT device.
- Edit details of an existing IoT device.
- Delete an IoT device.

---

## Project Structure

```plaintext
/
├── app.js                 # Main server file
├── public/                # Static files (HTML, CSS, JavaScript)
│   ├── index.html         # List all devices
│   ├── form.html          # Add a new device
│   ├── update.html        # Update a device
│   └── styles.css         # Styling for the web app
├── database/              # SQLite database
│   └── devices.db         # Pre-configured SQLite database
└── README.md              # Project documentation
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [SQLite](https://www.sqlite.org/)

---

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/iot-inventory.git
   ```
2. Navigate to the project directory:
   ```bash
   cd .
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up the database:
   - Create the database file:
     ```bash
     sqlite3 database/devices.db
     ```
   - Create the `devices` table:
     ```sql
     CREATE TABLE devices (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         name TEXT NOT NULL,
         type TEXT NOT NULL,
         location TEXT NOT NULL
     );
     ```
   - Insert sample data (optional):
     ```sql
     INSERT INTO devices (name, type, location) VALUES ('Temperature Sensor', 'Sensor', 'Living Room');
     INSERT INTO devices (name, type, location) VALUES ('Smart Light', 'Actuator', 'Bedroom');
     ```

---

### Running the Application

1. Start the server:
   ```bash
   node app.js
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## API Endpoints

| **Endpoint**          | **Method** | **Description**                 |
|------------------------|------------|---------------------------------|
| `/api/devices`         | `GET`      | Fetch all devices               |
| `/api/devices`         | `POST`     | Add a new device                |
| `/api/devices/:id`     | `PUT`      | Update an existing device       |
| `/api/devices/:id`     | `DELETE`   | Delete a specific device        |

---

### Example JSON Communication

#### Fetch all devices (GET /api/devices):
```json
[
    {
        "id": 1,
        "name": "Temperature Sensor",
        "type": "Sensor",
        "location": "Living Room"
    },
    {
        "id": 2,
        "name": "Smart Light",
        "type": "Actuator",
        "location": "Bedroom"
    }
]
```

#### Add a new device (POST /api/devices):
Request:
```json
{
    "name": "Smart Plug",
    "type": "Actuator",
    "location": "Office"
}
```
Response:
```json
{ "id": 3 }
```

---

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/)
