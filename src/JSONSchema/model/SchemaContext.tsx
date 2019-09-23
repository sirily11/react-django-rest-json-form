import React, { Component } from "react";
import axios from "axios";
import { SchemaList } from "./Schema";

interface State {
  schemaList: SchemaList;
}

interface Props {}

const context: State = {
  schemaList: new SchemaList([])
};

export const SchemaContext = React.createContext(context);

export default class SchemaProvider extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      schemaList: new SchemaList([])
    };
  }

  async componentDidMount() {}

  render() {
    return (
      <SchemaContext.Provider value={this.state}>
        {this.props.children}
      </SchemaContext.Provider>
    );
  }
}
