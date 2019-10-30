import React from "react";
import MUIDataTable from "mui-datatables";

const columns = [
  {
    name: "RegistrationId",
    label: "Registration Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "CompanyName",
    label: "Company Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Abbreviation",
    label: "Abbreviation",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "LicensePeriod",
    label: "License Period",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "ITAdmin",
    label: "IT Admin",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    RegistrationId: "LK-254",
    CompanyName: "Samuel Gnanam IT Centre",
    Abbreviation: "SGIC",
    LicensePeriod: "2 Years",
    ITAdmin: "Thiru"
  },
  {
    RegistrationId: "LK-254",
    CompanyName: "Samuel Gnanam IT Centre",
    Abbreviation: "SGIC",
    LicensePeriod: "2 Years",
    ITAdmin: "Thiru"
  },
  {
    RegistrationId: "LK-254",
    CompanyName: "Samuel Gnanam IT Centre",
    Abbreviation: "SGIC",
    LicensePeriod: "2 Years",
    ITAdmin: "Thiru"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "none"
};

export default function ViewConsumers() {
  return (
    <div>
      <MUIDataTable data={data} columns={columns} options={options} />
    </div>
  );
}
