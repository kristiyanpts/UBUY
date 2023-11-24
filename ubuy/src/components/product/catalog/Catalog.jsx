import { useEffect, useState } from "react";
import "./Catalog.css";
import Product from "../../shared/product/Product";
import { parseError } from "../../../core/lib/errorParser";
import { SendErrorNotification } from "../../../core/notifications/notifications";

import * as productService from "../../../core/services/productService";
// import {
//   FormControlLabel,
//   MuiThemeProvider,
//   Radio,
//   RadioGroup,
//   Slider,
//   createTheme,
// } from "@material-ui/core";
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Typography,
} from "@mui/material";

// const sliderTheme = createTheme({
//   overrides: {
//     MuiSlider: {
//       thumb: {
//         color: "#38a2e5",
//       },
//       track: {
//         color: "var(--text-primary)",
//       },
//       rail: {
//         color: "var(--background-primary)",
//       },
//     },
//   },
// });

// const radioTheme = createTheme({
//   overrides: {
//     MuiRadio: {
//       root: {
//         "& .MuiSvgIcon-root": {
//           height: 20,
//           width: 20,
//         },
//       },
//       colorPrimary: {
//         color: "#38a2e5",
//         "&$checked": {
//           color: "#38a2e5",
//         },
//       },
//     },
//     MuiFormControlLabel: {
//       label: {
//         fontSize: "20px",
//       },
//     },
//   },
// });

const Catalog = () => {
  const [priceValue, setPriceValue] = useState([0, 10000]);
  const [toggleFilters, setToggleFilters] = useState(false);
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "all",
    "min-price": "0",
    "max-price": "10000",
    sorting: "price-low",
  });

  const rangeSelector = (event, newValue) => {
    setPriceValue(newValue);
  };

  useEffect(() => {
    productService
      .getProducts()
      .then((result) => {
        setProducts(result);
        setDisplayedProducts(result);
      })
      .catch((error) => {
        let errors = parseError(error);

        errors.forEach((err) => {
          SendErrorNotification(err);
        });
      });
  }, []);

  useEffect(() => {
    filterProducts();
  }, [filters]);

  function filterProducts() {
    let filteredProducts = products.filter(
      (p) =>
        p.price >= filters["min-price"] &&
        p.price <= filters["max-price"] &&
        (filters.category != "all" ? p.category == filters.category : true)
    );

    console.log(filters["sorting"], filteredProducts);

    if (filters["sorting"] == "recent") {
      filteredProducts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (filters["sorting"] == "price-high") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (filters["sorting"] == "a-z") {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (filters["sorting"] == "z-a") {
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    } else if (filters["sorting"] == "price-low") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (filters["sorting"] == "most-reviewed") {
      filteredProducts.sort((a, b) => b.reviews.length - a.reviews.length);
    }

    setDisplayedProducts(filteredProducts);
  }

  function onFilterChange(e) {
    e.preventDefault();

    // @ts-ignore
    let formData = Object.fromEntries(new FormData(e.currentTarget));

    // @ts-ignore
    setFilters(formData);
    filterProducts();
  }

  function changeSort(e) {
    setFilters((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="catalog-wrapper">
      <form
        className={`filters ${toggleFilters ? "shown" : ""}`}
        onSubmit={onFilterChange}
      >
        <button
          className="toggle-filters"
          type="button"
          onClick={() => setToggleFilters(!toggleFilters)}
        >
          <i
            className={`fa-solid ${
              toggleFilters ? "fa-angles-up" : "fa-angles-down"
            }`}
          ></i>
        </button>
        <div className="title">Filters</div>
        <div className="filter-options">
          <div className="name">Category</div>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="category"
            sx={{
              "& .MuiSvgIcon-root": {
                height: 20,
                width: 20,
              },
              colorPrimary: {
                color: "#38a2e5",
                "&$checked": {
                  color: "#38a2e5",
                },
              },
            }}
          >
            <FormControlLabel
              value="all"
              control={<Radio size="small" color="primary" />}
              label={<Typography style={{ fontSize: "24px" }}>All</Typography>}
            />
            <FormControlLabel
              value="home"
              control={<Radio size="small" color="primary" />}
              label={<Typography style={{ fontSize: "24px" }}>Home</Typography>}
            />
            <FormControlLabel
              value="electronics"
              control={<Radio size="small" color="primary" />}
              label={
                <Typography style={{ fontSize: "24px" }}>
                  Electronics
                </Typography>
              }
              style={{ fontSize: "16px!important" }}
            />
            <FormControlLabel
              value="gaming"
              control={<Radio size="small" color="primary" />}
              label={
                <Typography style={{ fontSize: "24px" }}>Gaming</Typography>
              }
            />
            <FormControlLabel
              value="others"
              control={<Radio size="small" color="primary" />}
              label={
                <Typography style={{ fontSize: "24px" }}>Others</Typography>
              }
            />
          </RadioGroup>
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
              <label htmlFor="max-price">MAX</label>
              <input
                type="text"
                name="max-price"
                id="max-price"
                max={10000}
                value={priceValue[1]}
              />
            </div>
          </div>
          <Slider
            value={priceValue}
            onChange={rangeSelector}
            valueLabelDisplay="off"
            min={0}
            max={10000}
            sx={{
              thumb: {
                color: "#38a2e5",
              },
            }}
          />
        </div>
        <div className="title">Sorting</div>
        <div className="filter-options">
          <div className="name">Price Sorting</div>
          <FormControl fullWidth size="small">
            <Select
              labelId="sorting"
              id="sorting"
              name="sorting"
              value={filters["sorting"]}
              onChange={changeSort}
              displayEmpty
              sx={{
                "& #sorting": {
                  fontSize: "18px",
                  color: "var(--text-primary)",
                },
              }}
            >
              <MenuItem value="price-low" style={{ fontSize: "18px" }}>
                Lowest Price
              </MenuItem>
              <MenuItem value="price-high" style={{ fontSize: "18px" }}>
                Highest Price
              </MenuItem>
              <MenuItem value="a-z" style={{ fontSize: "18px" }}>
                Alphabetically (A-Z)
              </MenuItem>
              <MenuItem value="z-a" style={{ fontSize: "18px" }}>
                Alphabetically (Z-A)
              </MenuItem>
              <MenuItem value="recent" style={{ fontSize: "18px" }}>
                Recently Added
              </MenuItem>
              <MenuItem value="most-reviewed" style={{ fontSize: "18px" }}>
                Most Reviewed
              </MenuItem>
            </Select>
          </FormControl>
        </div>

        <button className="apply-btn" type="submit">
          Apply Changes
        </button>
      </form>
      <div className="products-wrapper">
        {displayedProducts.length > 0 &&
          displayedProducts.map((product) => (
            <Product key={product._id} {...product}></Product>
          ))}

        {displayedProducts.length == 0 && (
          <div className="no-return">There are no procuts to display!</div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
