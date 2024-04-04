import { describe,it,expect } from "vitest";
import { render } from "@testing-library/react";
import ImageNotFound from "./ImageNotFound";

describe( 'ImageNotFound', () =>{
    it("should be class text-red-500 in the span", ()=>{
        render(<ImageNotFound />);
        const  name  = document.querySelector("span");         
        expect(name).toHaveClass('text-red-500')
      
    })
})