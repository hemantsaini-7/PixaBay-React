import React, { Component } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";
import Result from "./Result";

class Search extends Component {
  state = {
    text: "",
    limit: 15,
    apiUrl: "https://pixabay.com/api",
    apiKey: "17528790-0ce0349961c2cc25afa9bc463",
    images: [],
  };

  TextChange = (e) => {
    const val = e.target.value;
    this.setState(
      {
        [e.target.name]: val,
      },
      () => {
        if (val === "") {
          this.setState({
            images: [],
          });
        } else {
          axios
            .get(
              `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.text}&image_type=photo&per_page=${this.state.limit}`
            )
            .then((res) => this.setState({ images: res.data.hits }))
            .catch((err) => console.log(err));
        }
      }
    );
  };

  LimitChange = (e, index, value) => this.setState({ limit: value });
  render() {
    console.log(this.state.images);
    return (
      <div>
        <TextField
          name='text'
          value={this.state.text}
          onChange={this.TextChange}
          floatingLabelText='Search for Images'
          fullWidth={true}
        />
        <br />
        <SelectField
          name='limit'
          floatingLabelText='limit'
          value={this.state.limit}
          onChange={this.LimitChange}
        >
          <MenuItem value={5} primaryText='5' />
          <MenuItem value={15} primaryText='15' />
          <MenuItem value={20} primaryText='20' />
          <MenuItem value={30} primaryText='30' />
          <MenuItem value={50} primaryText='50' />
        </SelectField>
        <br />
        {this.state.images.length > 0 ? (
          <Result images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default Search;
