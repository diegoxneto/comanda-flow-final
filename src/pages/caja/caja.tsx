import React, { useState } from "react";

const Caja: React.FC = () => {
  // Datos de prueba para que la maestra vea movimiento en la página
  const [cuentas, setCuentas] = useState([
    { 
      id: 105, 
      mesa: "Mesa 1", 
      items: [
        { nombre: "Tacos al Pastor (Orden)", precio: 85, cant: 2 },
        { nombre: "Coca Cola", precio: 25, cant: 1 }
      ],
      total: 195
    },
    { 
      id: 106, 
      mesa: "Mesa 4", 
      items: [
        { nombre: "Hamburguesa Doble", precio: 120, cant: 1 },
        { nombre: "Papas Fritas", precio: 45, cant: 1 },
        { nombre: "Cerveza", precio: 50, cant: 2 }
      ],
      total: 265
    }
  ]);

  const finalizarCobro = (id: number) => {
    setCuentas(cuentas.filter(c => c.id !== id));
    alert("¡Cobro realizado con éxito! La mesa ha sido liberada.");
  };

  return (
    <Box sx={{ p: 5, mt: 8 }}>
      <Typography variant="h4" color="primary" gutterBottom sx={{ fontWeight: 'bold' }}>
        Módulo de Caja - Control de Pagos
      </Typography>
      
      <Stack direction="column" spacing={3}>
        {cuentas.length > 0 ? (
          cuentas.map((cuenta) => (
            <Card key={cuenta.id} sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6" color="secondary">
                    {cuenta.mesa} - Folio #{cuenta.id}
                  </Typography>
                  <Typography variant="h6" color="success.main">
                    Total: ${cuenta.total}.00 MXN
                  </Typography>
                </Box>
                
                <TableContainer component={Paper} variant="outlined" sx={{ mb: 2 }}>
                  <Table size="small">
                    <TableHead sx={{ bgcolor: '#f5f5f5' }}>
                      <TableRow>
                        <TableCell><strong>Producto</strong></TableCell>
                        <TableCell align="center"><strong>Cant.</strong></TableCell>
                        <TableCell align="right"><strong>Precio Unit.</strong></TableCell>
                        <TableCell align="right"><strong>Subtotal</strong></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cuenta.items.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{item.nombre}</TableCell>
                          <TableCell align="center">{item.cant}</TableCell>
                          <TableCell align="right">${item.precio}</TableCell>
                          <TableCell align="right">${item.precio * item.cant}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <Button 
                  variant="contained" 
                  color="success" 
                  size="large"
                  fullWidth
                  onClick={() => finalizarCobro(cuenta.id)}
                  sx={{ py: 1.5, fontWeight: 'bold' }}
                >
                  FINALIZAR COBRO Y CERRAR COMANDA
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography variant="h5" color="textSecondary">
              No hay cuentas pendientes por cobrar.
            </Typography>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default Caja;