import { useState } from "react";
import "./Catalog.css";
import { MuiThemeProvider, Slider, createMuiTheme } from "@material-ui/core";

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "#38a2e5",
      },
      track: {
        color: "var(--text-primary)",
      },
      rail: {
        color: "var(--background-primary)",
      },
    },
  },
});

const Catalog = () => {
  const [priceValue, setPriceValue] = useState([0, 1000]);

  const rangeSelector = (event, newValue) => {
    setPriceValue(newValue);
  };

  return (
    <div className="catalog-wrapper">
      <div className="filters">
        <div className="title">Filters</div>
        <div className="filter-options">
          <div className="name">Category</div>
          <div className="filter-option">
            <label htmlFor="checkbox-home">
              <input type="checkbox" id="checkbox-home" name="checkbox-home" />
              Home
            </label>
          </div>
          <div className="filter-option">
            <label htmlFor="checkbox-electronics">
              <input
                type="checkbox"
                id="checkbox-electronics"
                name="checkbox-electronics"
              />
              Electronics
            </label>
          </div>
          <div className="filter-option">
            <label htmlFor="checkbox-gaming">
              <input
                type="checkbox"
                id="checkbox-gaming"
                name="checkbox-gaming"
              />
              Gaming
            </label>
          </div>
          <div className="filter-option">
            <label htmlFor="checkbox-other">
              <input
                type="checkbox"
                id="checkbox-other"
                name="checkbox-other"
              />
              Other
            </label>
          </div>
        </div>
        <div className="filter-options">
          <div className="name">Price</div>
          <div className="price-inputs">
            <div className="price-input">
              <label htmlFor="min-price">MIN</label>
              <input
                type="text"
                name="min-price"
                id="min-price"
                min={0}
                value={priceValue[0]}
              />
            </div>
            <div className="price-input">
              <label htmlFor="min-price">MAX</label>
              <input
                type="text"
                name="min-price"
                id="min-price"
                max={1000}
                value={priceValue[1]}
              />
            </div>
          </div>
          <MuiThemeProvider theme={muiTheme}>
            <Slider
              value={priceValue}
              onChange={rangeSelector}
              valueLabelDisplay="off"
              min={0}
              max={1000}
            />
          </MuiThemeProvider>
        </div>
        <div className="title">Sorting</div>
        <div className="filter-options">
          <div className="name">Price</div>
          <div className="filter-option">
            <select name="price-sort" id="price-sort">
              <option value="price-low">Lowest Price</option>
              <option value="price-high">Highest Price</option>
            </select>
          </div>
        </div>
        <div className="filter-options">
          <div className="name">Name</div>
          <div className="filter-option">
            <select name="name-sort" id="name-sort">
              <option value="a-z">Alphabetically (A-Z)</option>
              <option value="z-a">Alphabetically (Z-A)</option>
            </select>
          </div>
        </div>
        <div className="filter-options">
          <div className="name">Other</div>
          <div className="filter-option">
            <select name="other-sort" id="other-sort">
              <option value="recent">Recently Added</option>
              <option value="most-reviewed">Most Reviewed</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
