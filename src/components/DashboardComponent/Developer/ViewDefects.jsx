import React from "react";
import MUIDataTable from "mui-datatables";

const columns = [
  {
    name: "DefectId",
    label: "Defect Id",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "ModuleName",
    label: "Module Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Severity",
    label: "Severity",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Priority",
    label: "Priority",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "TypeId",
    label: "Type Id",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Status",
    label: "Status",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    DefectId: "D-100",
    ModuleName: "UI",
    Severity: "High",
    Priority: "Urgent",
    TypeId: "T-120",
    Status: "New"
  },
  {
    DefectId: "D-100",
    ModuleName: "UI",
    Severity: "High",
    Priority: "Urgent",
    TypeId: "T-120",
    Status: "New"
  },
  {
    DefectId: "D-100",
    ModuleName: "UI",
    Severity: "High",
    Priority: "Urgent",
    TypeId: "T-120",
    Status: "New"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "none"
};

export default function ViewDefects() {
  return (
    <div>
      <MUIDataTable data={data} columns={columns} options={options} />
    </div>
  );
}
