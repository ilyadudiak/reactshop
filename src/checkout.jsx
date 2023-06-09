import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  HStack,
  Input,
  Stack,
} from "@chakra-ui/react";

export default function CheckoutPage({ cartItems, setCartItems }) {
  const [isComplete, setIsComplete] = useState(false);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const items = cartItems.map((item) => {
    return (
      <Tr>
        <Td>{item.title}</Td>
        <Td>{item.price}</Td>
        <Td>{item.counter}</Td>
      </Tr>
    );
  });
  if (isComplete) {
    return (
      <div className="checkout-page">
        <h2>Thank you for buying!</h2>
        <Button className="checkout-back" colorScheme="purple">
          <Link to={"/"}>Back to shop</Link>
        </Button>
      </div>
    );
  } else {
    return (
      <div className="checkout-page">
        <h2>Checkout</h2>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th>Price</Th>
                <Th>quantity</Th>
              </Tr>
            </Thead>
            <Tbody>{items}</Tbody>
          </Table>
        </TableContainer>
        <Stack spacing={6} className="checkout-form">
          <Input
            name="email"
            placeholder="Enter your email"
            value={email}
            focusBorderColor={email.length > 9 ? "green" : "crimson"}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></Input>
          <Input
            name="address"
            placeholder="Enter your address"
            focusBorderColor={address.length > 9 ? "green" : "crimson"}
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Input>
          <Button
            colorScheme="orange"
            onClick={() => {
              if (email.length > 9 && address.length > 9) {
                setCartItems([]);
                setIsComplete(true);
              } else {
                Swal.fire({
                  icon: "error",
                  text: "Complete all inputs!",
                });
              }
            }}
          >
            Confirm
          </Button>
          <Button>
            <Link to={"/"}>Back to shop</Link>
          </Button>
        </Stack>
      </div>
    );
  }
}
