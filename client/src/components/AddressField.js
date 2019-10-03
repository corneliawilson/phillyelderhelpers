import React, { Component, Fragment } from 'react';

import {
  Input,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const autofill_url = 'http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest';
const philly_coords = "-75.28,39.87,-74.96,40.15";

// PROPS:
// - address (string)
// - setAddress()
class AddressField extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);

    this.state = {
      options: [],
      active_option: -1,
      options_open: false,
      fetch_options: {
        method: 'GET',
        mode: 'cors'
      }
    }
  }

  handleChange(event) {
    console.log("Changed");
    const value = event.target.value;
    const url = autofill_url + "?text=" + value + "&f=json&category=Address&SearchExtent=" + philly_coords;
    let options = [];

    fetch(url, this.state.fetch_options)
    .then(readable => {
        console.log("fetch returned");
        return readable.json();
      }).then(data => {
        options = data.suggestions;
        this.setState({
          options: options,
          active_option: -1,
          options_open: options.length !== 0
        });
      })

    this.props.setAddress(value);
  }

  onClick(index) {
    const { options } = this.state; 
    this.setState({
      options: [],
      active_option: -1,
      options_open: false
    })
    this.props.setAddress(options[index].text);
  }

  onKeyDown(event) {
    const { active_option, options } = this.state;

    // On enter
    if (event.keyCode === 13) {
      if (active_option !== -1)
        this.onClick(active_option);
      event.preventDefault();

    }

    // up arrow, decrement the index
    else if (event.keyCode === 38) {

      let new_opt = options.length - 1;
      if (active_option >= 0) {
        new_opt = active_option - 1;
      }

      this.setState({ active_option: new_opt });
      event.preventDefault();

    }

    // down arrow, increment the index
    else if (event.keyCode === 40) {
      let new_opt = -1;
      if (active_option < options.length - 1) {
        new_opt = active_option + 1;
      }

      this.setState({ active_option: new_opt });
      event.preventDefault();

    }
  }

  render() {
    const { options_open, options, active_option } = this.state;

  	return (
  	  <Fragment>
        <Input 
          name="address" 
          placeholder="Address" 
          value={this.props.address} 
          onChange={this.handleChange} 
          onKeyDown={this.onKeyDown}
          autoComplete="off"
        />
        { options_open && options.length > 0 && 
          <Dropdown isOpen={true} toggle={() => this.setState({options_open: false}) }>
            <DropdownMenu style={{ opacity: '1' }} >
            { options.map((opt, i) => (
              <DropdownItem 
                onClick={() => this.onClick(i)}
                key={i}
                active={i === active_option}
              >{opt.text}</DropdownItem>
            ))}
            </DropdownMenu>
          </Dropdown>
        }
  	  </Fragment>
  	);
	}
}

export default AddressField;


