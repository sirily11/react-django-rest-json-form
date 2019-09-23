import React, { useState } from "react";
import { FieldProps } from "./JSONSchemaTextField";
import {
  Form,
  Dropdown,
  Label,
  Button,
  Grid,
  Modal,
  Header
} from "semantic-ui-react";
import axios from "axios";
import { getURL } from "../utils";
import { Schema } from "../model/Schema";
import JSONSchema from "../JSONSchema";

export default function JSONSchemaForignField(props: FieldProps) {
  const { schema, onSaved } = props;
  const [list, setList] = useState<any[]>([]);
  const [editSchema, setSchema] = useState<Schema[]>();

  function hasError() {
    if (schema.required && schema.value === undefined) {
      return { content: "This field is required", pointing: "below" };
    }
    return;
  }

  const fetchList = async () => {
    if (schema.extra) {
      let url = getURL(schema.extra.related_model.replace("-", "_") + "/");
      let response = await axios.get<any[]>(url);
      return response.data.map(r => {
        return { value: r.id, text: r.name, key: r.id };
      });
    }
  };

  const fetchSchema = async () => {
    if (schema.extra) {
      let url = getURL(schema.extra.related_model.replace("-", "_") + "/");
      let response = await axios.request({ method: "OPTIONS", url: url });
      setSchema(response.data.fields);
    }
  };

  return (
    <Grid>
      <Grid.Row columns="equal">
        <Grid.Column width={10}>
          <Dropdown
            text={schema.label}
            labeled
            placeholder={`Select ${schema.label}`}
            fluid
            search
            selection
            options={list}
            onClick={async () => {
              let result = await fetchList();
              if (result) {
                setList(result);
              }
            }}
          />
        </Grid.Column>
        <Grid.Column>
          <Modal
            trigger={
              <Button
                icon="add"
                color="blue"
                onClick={async () => await fetchSchema()}
              ></Button>
            }
          >
            <Modal.Content image>
              <Modal.Description style={{ width: "100%" }}>
                <Header>Add {schema.label}</Header>
                {editSchema && <JSONSchema schemas={editSchema}></JSONSchema>}
              </Modal.Description>
            </Modal.Content>
          </Modal>

          <Modal
            trigger={
              <Button
                icon="edit"
                color="blue"
                onClick={async () => await fetchSchema()}
              ></Button>
            }
          >
            <Modal.Content image>
              <Modal.Description style={{ width: "100%" }}>
                <Header>Add {schema.label}</Header>
                {editSchema && <JSONSchema schemas={editSchema}></JSONSchema>}
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Grid.Column>
        {schema.required && (
          <Grid.Column>
            <Label tag color="red">
              Required
            </Label>
          </Grid.Column>
        )}
      </Grid.Row>
    </Grid>
  );
}
