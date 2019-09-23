import React from "react";
import { Schema } from "../model/Schema";
import { Input, Form } from "semantic-ui-react";

export interface FieldProps {
  schema: Schema;
  onSaved(value: string): void;
}

export default function JSONSchemaTextField(props: FieldProps) {
  const { schema, onSaved } = props;

  function hasError() {
    if (schema.required && schema.value === undefined) {
      return { content: "This field is required", pointing: "below" };
    }

    return;
  }

  return (
    <Form.Field
      control={Input}
      label={schema.label}
      error={hasError()}
      defaultValue={
        schema.value ? schema.value : schema.extra && schema.extra.default
      }
    ></Form.Field>
  );
}
