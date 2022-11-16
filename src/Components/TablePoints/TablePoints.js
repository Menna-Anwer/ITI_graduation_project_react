import  React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
      {
        field: 'studentName',
        headerName: 'Student Name',
        width: 150,
      },
      {
        field: 'points',
        headerName: 'Points',
        type: 'number',
        width: 110,
      },
      {
        field: 'feadback',
        headerName: 'Feadback',
        width: 160,
        // valueGetter: (params) =>
        //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
      },

];

const rows = [
    { id: 1,  studentName: 'Jon', points: 35,feadback:"wwwwwwwwww",edit:"" },
        { id: 2,  studentName: 'Cersei', points: 42,feadback:"",edit:"" },
        { id: 3,  studentName: 'Jaime', points:45,feadback: "",edit:""},
        { id: 4,  studentName: 'Arya', points: 16,feadback:"",edit: ""},
        { id: 5,  studentName: 'Daenerys', points: null ,feadback:"",edit:"" },
        { id: 6,  studentName: null, points: 150, feadback:"",edit:"" },
        { id: 7,  studentName: 'Ferrara', points: 44,feadback:"",edit:"" },
        { id: 8,  studentName: 'Rossini', points: 36,feadback:"",edit:""  },
        { id: 9,  studentName: 'Harvey', points: 65,feadback:"",edit:""  },
];

export default function TablePoints() {
  return (
    <div style={{ height: 450, width:'70%' , margin:"auto"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
      />
    </div>
  );
}

// const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   {
//     field: 'studentName',
//     headerName: 'Student Name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'points',
//     headerName: 'Points',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'feadback',
//     headerName: 'Feadback',
//     editable: true,
//     width: 160,
//     // valueGetter: (params) =>
//     //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
//   {
//     field: 'edit',
//     headerName: 'Edit',
//     width: 120,
//     headerClassName: 'super-app-theme--header',
//     cellClassName: 'super-app-theme--cell',
//     renderCell: (params) => (
//         <strong>
//             <Button variant="contained" size="small">
//                 Edit
//             </Button>
//             {/* {isShown && <ViewDownload />} */}
//         </strong>
//     )
//     // renderCell: renderDetailsButton
// }
// ];
// const rows = [
//     { id: 1,  studentName: 'Jon', points: 35,feadback:"wwwwwwwwww",edit:"" },
//     { id: 2,  studentName: 'Cersei', points: 42,feadback:"",edit:"" },
//     { id: 3,  studentName: 'Jaime', points:45,feadback: "",edit:""},
//     { id: 4,  studentName: 'Arya', points: 16,feadback:"",edit: ""},
//     { id: 5,  studentName: 'Daenerys', points: null ,feadback:"",edit:"" },
//     { id: 6,  studentName: null, points: 150, feadback:"",edit:"" },
//     { id: 7,  studentName: 'Ferrara', points: 44,feadback:"",edit:"" },
//     { id: 8,  studentName: 'Rossini', points: 36,feadback:"",edit:""  },
//     { id: 9,  studentName: 'Harvey', points: 65,feadback:"",edit:""  },
//   ];

// const TablePoints = () => {
   
//   return (
//     <div className='container'>
//         <Box sx={{ height: 400, width: '70%' }} style={{margin:"auto"}}>
//             <DataGrid
//                 rows={rows}
//                 columns={columns}
//                 pageSize={5}
//                 rowsPerPageOptions={[7]}
//                 // checkboxSelection
//                 // disableSelectionOnClick
//                 experimentalFeatures={{ newEditingApi: true }}
//             />
//     </Box>
//     </div>
//   )
// }

// export default TablePoints
