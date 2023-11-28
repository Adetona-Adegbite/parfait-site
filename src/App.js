import parfait from "./assets/parfait.png";
import classes from "./App.module.css";
import Card from "./components/Card";
import { motion } from "framer-motion";
function App() {
  const toppings = [
    { id: 0, name: "Pear" },
    { id: 1, name: "Grapes" },
    { id: 2, name: "Apples" },
    { id: 3, name: "Banana" },
    { id: 4, name: "Twix" },
    { id: 5, name: "KitKat" },
    { id: 6, name: "Snickers" },
    { id: 7, name: "Bounty" },
    { id: 8, name: "Granola Mix" },
    { id: 9, name: "Granola Mix" },
  ];
  return (
    <div className={classes.page}>
      <motion.div
        initial={{ y: -150 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className={classes["product-name"]}
      >
        <h1>
          J's <br />
          <span>Flavour Fusion</span>
        </h1>
      </motion.div>
      {/* <div className={classes.slogan}>
        <p>Perfection in every scoop</p>
      </div> */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={classes.button}
      >
        Order Now
      </motion.button>

      <div className={classes.body}>
        <div>
          <div className={classes.image}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className={classes["discount-box"]}
            >
              <p>
                <b>
                  <span>10%</span> OFF
                </b>
                <br />
                FOR THE FIRST 10 BUYERS
              </p>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              src={parfait}
            />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className={classes["toppings-div"]}
        >
          <h2 style={{ textAlign: "center" }}>Toppings</h2>
          <div className={classes.toppings}>
            {toppings.map((item) => {
              return <Card item={item} />;
            })}
          </div>
        </motion.div>
      </div>
      <div className={classes.footer}>
        <p>Emerald Hostel - Room E0-01</p>
      </div>
    </div>
  );
}

export default App;
