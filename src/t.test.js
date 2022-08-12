import { wellcome } from "./te.js";




test("should text",()=>{
    const text = wellcome("CAMILA");
    expect(text).toBe("wellcome CAMILA");
})

test("should text",()=>{
    const text = wellcome("PEDRO");
    expect(text).toBe("wellcome PEDRO");
})




test("should text",()=>{
   const drink = jest.fn(()=> true);
    
    expect(drink).toHaveReturned();
})