import React, { useState } from "react";
import { Typography, Box, Stack, Button, Card, CardContent } from "@mui/material";

const Cocina: React.FC = () => {
  const [pedidos, setPedidos] = useState([
    { id: 105, mesa: "Mesa 1", items: ["2x Tacos", "1x Coca"] },
    { id: 106, mesa: "Mesa 4", items: ["1x Hamburguesa"] }
  ]);

  const finalizarPedido = (id: number) => {
    setPedidos(pedidos.filter(p => p.id !== id));
    alert("¡Pedido enviado al mesero!");
  };

  return (
    <Box sx={{ p: 5, mt: 8 }}>
      <Typography variant="h4" gutterBottom>Órdenes en Cocina</Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        {pedidos.map((p) => (
          <Card key={p.id} sx={{ minWidth: 250, m: 1, bgcolor: '#fffde7' }}>
            <CardContent>
              <Typography variant="h6">{p.mesa} - Comanda #{p.id}</Typography>
              <Typography variant="body2" sx={{ my: 2 }}>{p.items.join(", ")}</Typography>
              <Button 
                variant="contained" 
                color="warning" 
                fullWidth 
                onClick={() => finalizarPedido(p.id)}
              >
                Listo para servir
              </Button>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default Cocina;