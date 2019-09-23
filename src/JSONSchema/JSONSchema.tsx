import React, { Component } from "react";
import { Schema, SchemaList, Widget } from "./model/Schema";
import { FieldAction } from "./model/Action";
import { FieldIcon } from "./model/Icon";
import { Form, Button, Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import JSONSchemaTextField from "./Components/JSONSchemaTextField";
import JSONSchemaSelectField from "./Components/JSONSchemaSelectField";
import JSONSchemaForignField from "./Components/JSONSchemaForignField";

interface Props {
  schemas: Schema[] | any;
  values?: { [key: string]: any };
  actions?: FieldAction[];
  icons?: FieldIcon[];
}

interface State {
  schemaList?: SchemaList;
}

export default class JSONSchema extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { schemaList: undefined };
  }

  componentDidMount() {
    const { schemas, values, icons, actions } = this.props;
    let schemaList: SchemaList = new SchemaList(schemas);

    if (values) {
      schemaList.merge(values);
    }
    if (icons) {
      let newSchema = FieldIcon.merge(schemaList.schemaList, icons);
      schemaList.schemaList = newSchema;
    }
    if (actions) {
      let newSchema = FieldAction.merge(schemaList.schemaList, actions);
      schemaList.schemaList = newSchema;
    }
    this.setState({ schemaList: schemaList });
  }

  onSaved = (value: string) => {};

  /**
   * render field based on schema's type
   * @param schema Schema
   */
  renderField(schema: Schema) {
    switch (schema.widget) {
      case Widget.select:
        return (
          <JSONSchemaSelectField
            schema={schema}
            onSaved={this.onSaved}
          ></JSONSchemaSelectField>
        );
      case Widget.foreignkey:
        return (
          <JSONSchemaForignField
            schema={schema}
            onSaved={this.onSaved}
          ></JSONSchemaForignField>
        );
      default:
        return <JSONSchemaTextField schema={schema} onSaved={this.onSaved} />;
    }
  }

  render() {
    const { schemaList } = this.state;

    return (
      <Container>
        <Form>
          {schemaList &&
            schemaList.schemaList
              .filter(s => !s.readonly && s.widget !== Widget.tomanyTable)
              .map(s => <Form.Field>{this.renderField(s)}</Form.Field>)}
          <Button onClick={schemaList && schemaList.onSubmit}>Submit</Button>
        </Form>
      </Container>
    );
  }
}
