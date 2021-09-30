import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

const Tables =(props)=>{

  return (
    <>
      <div style={{marginTop:15}}>
        <MUIDataTable
          title={props.title}
          data={props.tableData}
          columns={props.columns}

          options={{
            textLabels : { 
              body : { 
                noMatch : "¡Lo sentimos, no se encontraron registros!" ,
                toolTip: "Sort",
                columnHeaderTooltip: column => `${column.label}`
              },
              pagination: {
                rowsPerPage: "Registros por Página:",
                displayRows: "de",
              },
              selectedRows: {
                text: "Ocultar Fila Seleccionadas",
                delete: "Ocultar",
                deleteAria: "Ocultar Filas Seleccionadas",
              },toolbar: {
                search: "Buscar",
                downloadCsv: "Descargar",
                print: "Imprimir",
                viewColumns: "Columnas",
                filterTable: "Filtrar",
              },
              filter: {
                all: "Todo",
                title: "Filtros",
                reset: "Reiniciar",
              },
              viewColumns: {
                title: "Mostrar Columnas",
              },
            }
          
          }}
          filterType={'textField'}
        />
      </div>
    </>
  );
}

export default Tables;
