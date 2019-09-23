import React from "react";
import { Schema } from "../model/Schema";
import { Input, Form, Select } from "semantic-ui-react";
import { FieldProps } from "./JSONSchemaTextField";

export default function JSONSchemaSelectField(props: FieldProps) {
  const { schema, onSaved } = props;

  function hasError() {
    if (schema.required && schema.value === undefined) {
      return { content: "This field is required", pointing: "below" };
    }

    return;
  }

  const renderOptions = () => {
    if (schema.extra && schema.extra.choices) {
      return schema.extra.choices.map(c => {
        return { text: c.label, value: c.label, key: c.label };
      });
    }
  };

  return (
    <Form.Field
      control={Select}
      label={schema.label}
      options={renderOptions()}
      placeholder={
        schema.value ? schema.value : schema.extra && schema.extra.default
      }
    />
  );
}
