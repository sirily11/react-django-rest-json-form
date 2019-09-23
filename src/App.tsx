import React from "react";
import "./App.css";
import JSONSchema from "./JSONSchema/JSONSchema";
import { Schema, Widget } from "./JSONSchema/model/Schema";

export function App() {
  let l = [
    {
      label: "ID",
      readonly: true,
      extra: {},
      name: "id",
      widget: "number",
      required: false,
      translated: false,
      validations: {}
    },
    {
      label: "Item Name",
      readonly: false,
      extra: {
        help: "Please Enter your item name",
        default: "Item name"
      },
      name: "name",
      widget: "text",
      required: false,
      translated: false,
      validations: {
        length: {
          maximum: 1024
        }
      }
    },
    {
      label: "description",
      readonly: false,
      extra: {
        help: "Please enter your item description"
      },
      name: "description",
      widget: "text",
      required: false,
      translated: false,
      validations: {
        length: {
          maximum: 1024
        }
      }
    },
    {
      label: "price",
      readonly: false,
      extra: {
        default: 0.0
      },
      name: "price",
      widget: "number",
      required: false,
      translated: false,
      validations: {}
    },
    {
      label: "column",
      readonly: false,
      extra: {
        default: 1
      },
      name: "column",
      widget: "number",
      required: false,
      translated: false,
      validations: {}
    },
    {
      label: "row",
      readonly: false,
      extra: {
        default: 1
      },
      name: "row",
      widget: "number",
      required: false,
      translated: false,
      validations: {}
    },
    {
      label: "qr code",
      readonly: false,
      extra: {},
      name: "qr_code",
      widget: "text",
      required: false,
      translated: false,
      validations: {
        length: {
          maximum: 10008
        }
      }
    },
    {
      label: "unit",
      readonly: false,
      extra: {
        choices: [
          {
            label: "美元",
            value: "USD"
          },
          {
            label: "港币",
            value: "HDK"
          },
          {
            label: "人民币",
            value: "CNY"
          }
        ],
        default: "USD"
      },
      name: "unit",
      widget: "select",
      required: false,
      translated: false,
      validations: {}
    },
    {
      label: "created time",
      readonly: true,
      extra: {},
      name: "created_time",
      widget: "datetime",
      required: false,
      translated: false,
      validations: {}
    },
    {
      label: "author",
      readonly: true,
      extra: {
        related_model: "storage-management/author"
      },
      name: "author_name",
      widget: "foreignkey",
      required: false,
      translated: false,
      validations: {}
    },
    {
      label: "series",
      readonly: true,
      extra: {
        related_model: "storage-management/series"
      },
      name: "series_name",
      widget: "foreignkey",
      required: false,
      translated: false,
      validations: {}
    },
    {
      label: "category",
      readonly: true,
      extra: {
        related_model: "storage-management/category"
      },
      name: "category_name",
      widget: "foreignkey",
      required: false,
      translated: false,
      validations: {}
    },
    {
      label: "location",
      readonly: true,
      extra: {
        related_model: "storage-management/location"
      },
      name: "location_name",
      widget: "foreignkey",
      required: false,
      translated: false,
      validations: {}
    },
    {
      label: "detail position",
      readonly: true,
      extra: {
        related_model: "storage-management/detailposition"
      },
      name: "position_name",
      widget: "foreignkey",
      required: false,
      translated: false,
      validations: {}
    },
    {
      label: "images",
      readonly: false,
      extra: {
        related_model: "storage-management/itemimage"
      },
      name: "images",
      widget: "tomany-table",
      required: false,
      translated: false,
      validations: {}
    },
    {
      label: "files",
      readonly: false,
      extra: {
        related_model: "storage-management/itemfile"
      },
      name: "files",
      widget: "tomany-table",
      required: false,
      translated: false,
      validations: {}
    },
    {
      label: "author",
      readonly: false,
      extra: {
        related_model: "storage-management/author"
      },
      name: "author_id",
      widget: "foreignkey",
      required: true,
      translated: false,
      validations: {
        presence: true
      }
    },
    {
      label: "series",
      readonly: false,
      extra: {
        related_model: "storage-management/series"
      },
      name: "series_id",
      widget: "foreignkey",
      required: true,
      translated: false,
      validations: {
        presence: true
      }
    },
    {
      label: "category",
      readonly: false,
      extra: {
        related_model: "storage-management/category"
      },
      name: "category_id",
      widget: "foreignkey",
      required: true,
      translated: false,
      validations: {
        presence: true
      }
    },
    {
      label: "location",
      readonly: false,
      extra: {
        related_model: "storage-management/location"
      },
      name: "location_id",
      widget: "foreignkey",
      required: true,
      translated: false,
      validations: {
        presence: true
      }
    },
    {
      label: "detail position",
      readonly: false,
      extra: {
        related_model: "storage-management/detailposition"
      },
      name: "position_id",
      widget: "foreignkey",
      required: true,
      translated: false,
      validations: {
        presence: true
      }
    },
    {
      label: "uuid",
      readonly: true,
      extra: {
        default: "47ac47d5-37d9-4925-9c0e-e2fc75df22f8"
      },
      name: "uuid",
      widget: "text",
      required: false,
      translated: false,
      validations: {}
    },
    {
      label: "files",
      readonly: true,
      extra: {
        related_model: "storage-management/itemfile"
      },
      name: "files_objects",
      widget: "tomany-table",
      required: false,
      translated: false,
      validations: {}
    },
    {
      label: "images",
      readonly: true,
      extra: {
        related_model: "storage-management/itemimage"
      },
      name: "images_objects",
      widget: "tomany-table",
      required: false,
      translated: false,
      validations: {}
    }
  ];

  return (
    <div>
      <JSONSchema schemas={l}></JSONSchema>
    </div>
  );
}
