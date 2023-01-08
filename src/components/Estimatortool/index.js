import { useState } from 'react';
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";
import { Box, Flex } from "rebass";
import { Switch, Button } from 'evergreen-ui'


const Estimatortool = () => {
  {/* ROW 1 */}
  const [price, setPrice] = useState(1500);
  const [count, setCount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [markup, setMarkup] = useState(0);
  const [total, setTotal] = useState(0);

  function handleClick1() {
      setCount(count + 1);
      setSubtotal((count + 1) * price);
      setMarkup((subtotal + price) * 0.3);
      setTotal((subtotal + price) + (markup +(price * 0.3)));
    }

  function minuesClick1() {
    setCount(count - 1);
    setSubtotal((count - 1) * price);
    setMarkup((subtotal - price) * 0.3);
    setTotal((subtotal - price) - (markup -(price * 0.3)))
  }

  const formattedSubtotal = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(subtotal);
  const formattedMarkup = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(markup);
  const formattedTotal= new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);
  const formattedPrice= new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);


  {/* ROW 2 */}
  const [price2, setPrice2] = useState(1500);
  const [count2, setCount2] = useState(0);
  const [subtotal2, setSubtotal2] = useState(0);
  const [markup2, setMarkup2] = useState(0);
  const [total2, setTotal2] = useState(0);

  function handleClick2() {
    setCount2(count2 + 1);
    setSubtotal2((count2 + 1) * price2);
    setMarkup2((subtotal2 + price2) * 0.3);
    setTotal2((subtotal2 + price2) + (markup2 +(price2 * 0.3)));
  }

  function minuesClick2() {
    setCount2(count2 - 1);
    setSubtotal2((count2 - 1) * price2);
    setMarkup2((subtotal2 - price2) * 0.3);
    setTotal2((subtotal2 - price2) - (markup2 -(price2 * 0.3)))
  }


  const formattedSubtotal2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(subtotal2);
  const formattedMarkup2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(markup2);
  const formattedTotal2= new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total2);
  const formattedPrice2= new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price2);


  {/* TOTAL MATERIAL */}
  const materialTotal = (total + total2)
  const formattedMaterialTotal= new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(materialTotal);

  return (
    <>
      <h1>MATERIAL: {formattedMaterialTotal}</h1> 
      <Box as="form" onSubmit={(e) => e.preventDefault()} py={3}>

        {/*row 1 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Label htmlFor="device">Device</Label>
            <Select id="device" device="device" defaultValue="FACP">
        <option>FACP</option>
        <option>NAC BOOSTER</option>
        <option>DOC BOX</option>
        <option>DACT</option>
        </Select>
          </Box>

          <Box width={1 / 4} px={1}>
            <Label htmlFor="qty">QTY</Label>

            <div className="d-flex">
            <div className="p-1">
            <Button margin={0} appearance="primary" intent="success" onClick={handleClick1}>
              +</Button>
              <Button margin={0} appearance="primary" intent="danger" onClick={minuesClick1}>
              -</Button>
              </div>
              <div className="p-0">
              <Input id="qty" qty="qty" value={count} />
              </div>
              </div>
          </Box>

          <Box width={1 / 4} px={1}>
            <Label htmlFor="price">Price</Label>
            <Input id="price" price="price" value={formattedPrice} />
          </Box>

          <Box width={1 / 4} px={1}>
            <Label htmlFor="subtotal">Subtotal</Label>
            <Input id="subtotal" subtotal="subtotal" value={formattedSubtotal} />
          </Box>

          <Box width={1 / 4} px={1}>
            <Label htmlFor="markup">Mark-up</Label>
            <Input id="markup" markup="markup" value={formattedMarkup} />
          </Box>

          <Box width={1 / 4} px={1}>
            <Label htmlFor="total">Total</Label>
            <Input id="total" total="total" value={formattedTotal} />
          </Box>
        </Flex>

        {/*row 2 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Input id="device" device="device" defaultValue="FACP" />
          </Box>

          <Box width={1 / 4} px={1}>
          <div className="d-flex flex-row">
            <div className="p-1">
            <Button margin={0} appearance="primary" intent="success" onClick={handleClick2}>
              +</Button>
              <Button margin={0} appearance="primary" intent="danger" onClick={minuesClick2}>
              -</Button>
              </div>
              <div className="p-0">

            <Input id="qty" qty="qty" value={count2} />
            </div>
            </div>
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="price" price="price" value={formattedPrice2} />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="subtotal" subtotal="subtotal" value={formattedSubtotal2} />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="markup" markup="markup" value={formattedMarkup2} />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="total" total="total" value={formattedTotal2} />
          </Box>
        </Flex>

        {/*row 3 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Input id="device" device="device" defaultValue="FACP" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="qty" qty="qty" defaultValue="0" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="price" price="price" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="subtotal" subtotal="subtotal" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="markup" markup="markup" defaultValue="$450.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="total" total="total" defaultValue="$1,950.00" />
          </Box>
        </Flex>

        {/*row 4 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Input id="device" device="device" defaultValue="FACP" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="qty" qty="qty" defaultValue="0" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="price" price="price" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="subtotal" subtotal="subtotal" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="markup" markup="markup" defaultValue="$450.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="total" total="total" defaultValue="$1,950.00" />
          </Box>
        </Flex>

        {/*row 5 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Input id="device" device="device" defaultValue="FACP" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="qty" qty="qty" defaultValue="0" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="price" price="price" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="subtotal" subtotal="subtotal" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="markup" markup="markup" defaultValue="$450.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="total" total="total" defaultValue="$1,950.00" />
          </Box>
        </Flex>

        {/*row 6 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Input id="device" device="device" defaultValue="FACP" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="qty" qty="qty" defaultValue="0" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="price" price="price" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="subtotal" subtotal="subtotal" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="markup" markup="markup" defaultValue="$450.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="total" total="total" defaultValue="$1,950.00" />
          </Box>
        </Flex>

        {/*row 7 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Input id="device" device="device" defaultValue="FACP" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="qty" qty="qty" defaultValue="0" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="price" price="price" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="subtotal" subtotal="subtotal" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="markup" markup="markup" defaultValue="$450.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="total" total="total" defaultValue="$1,950.00" />
          </Box>
        </Flex>

        {/*row 8 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Input id="device" device="device" defaultValue="FACP" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="qty" qty="qty" defaultValue="0" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="price" price="price" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="subtotal" subtotal="subtotal" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="markup" markup="markup" defaultValue="$450.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="total" total="total" defaultValue="$1,950.00" />
          </Box>
        </Flex>

        {/*row 9 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Input id="device" device="device" defaultValue="FACP" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="qty" qty="qty" defaultValue="0" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="price" price="price" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="subtotal" subtotal="subtotal" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="markup" markup="markup" defaultValue="$450.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="total" total="total" defaultValue="$1,950.00" />
          </Box>
        </Flex>

        {/*row 10 */}
        <Flex mx={10} mb={3}>
          <Box width={1 / 4} px={1}>
            <Input id="device" device="device" defaultValue="FACP" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="qty" qty="qty" defaultValue="0" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="price" price="price" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="subtotal" subtotal="subtotal" defaultValue="$1,500.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="markup" markup="markup" defaultValue="$450.00" />
          </Box>

          <Box width={1 / 4} px={1}>
            <Input id="total" total="total" defaultValue="$1,950.00" />
          </Box>
        </Flex>

        {/* <Flex mx={-2} flexWrap='wrap'>
    <Label width={[ 1/2, 1/4 ]} p={2}>
      <Radio
        id='beep'
        name='beep'
        value='beep'
        defaultChecked
      />
      Beep
    </Label>
    <Label width={[ 1/2, 1/4 ]} p={2}>
      <Radio
        id='boop'
        name='beep'
        value='boop'
      />
      Boop
    </Label>
    <Label width={[1/2, 1/4]} p={2}>
      <Checkbox
        id='remember'
        name='remember'
      />
      Remember Me
    </Label>
    <Box px={2} ml='auto'>
      <Button>
        Beep
      </Button>
    </Box>
  </Flex> */}
      </Box>
    </>
  );
};

export default Estimatortool;
