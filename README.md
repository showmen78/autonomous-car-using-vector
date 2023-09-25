# autonomous-car-using-vector


---

This project implements an autonomous car using p5.js, simulating its movement and interaction with the environment. The car is controlled by sensors that detect obstacles, enabling it to navigate and avoid collisions.

## How it Works

The autonomous car in this simulation utilizes a sensor-based approach for navigation and obstacle avoidance:

1. **Sensors as Vectors**:
   - The car is equipped with sensors, each represented as vectors, extending from the car in various directions.
   - These sensors help the car perceive its surroundings and obstacles.

2. **Obstacle Detection**:
   - The sides of the road are defined as obstacle lines.
   - The sensors detect intersections with these obstacle lines, helping the car identify the proximity of obstacles.

3. **Intersection Calculation**:
   - When an intersection is detected between a sensor and an obstacle line, the point of intersection is calculated.
   - The intersection point provides information about the direction and proximity of the obstacle.

4. **Equivalent Vector Calculation**:
   - Using the intersection points from sensors and obstacle lines, an equivalent vector is computed.
   - This equivalent vector represents the direction in which the car should move to navigate around obstacles.

5. **Car Movement**:
   - The car adjusts its movement direction based on the calculated equivalent vector.
   - By following the equivalent vector, the car can safely navigate the simulated road, avoiding collisions with obstacles.

## Files

- `car.js`: Contains the implementation of the Car class, which represents the autonomous car and handles its movement, sensors, and interactions.
- `road.js`: Defines the Road class, which generates the road and obstacles for the car to navigate through.
- `sensor.js`: Contains the Sensor class, responsible for simulating the sensors used by the car to detect obstacles and determine its surroundings.
- `utility.js`: Provides utility functions used for mathematical calculations and intersection detection.
- `sketch.js`: The main file where the setup and update functions are defined to create the simulation and display the autonomous car's movement.

## How to Use

1. Clone the repository to your local machine using the following command:
   ```
   git clone <repository_url>
   ```

2. Open the `index.html` file in a web browser to run the simulation.

3. Interact with the simulation using the keyboard:
   - Press the 'W' key to accelerate the car.
   - Press the 'A' key to turn the car left.
   - Press the 'D' key to turn the car right.

4. Observe the car's movement and how it navigates the simulated road while avoiding obstacles.

## Dependencies

- [p5.js](https://p5js.org/): A JavaScript library for creative coding and visualization.

## Credits

- This project was created by Showmen Dey. Feel Free to modify the code.

---
