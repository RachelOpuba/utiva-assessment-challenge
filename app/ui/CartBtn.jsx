import Image from "next/image"

const CartBtn = () => {
  return (
    <>
    <div>
        <button className=" flex justify-center items-center text-[#475367] py-2 px-3  gap-[10px] border-[1.5px] border-#D0D5DD rounded-full mt-4">
            <Image src={'/cart.svg'} height={17} width={17} alt="Cart" className="text-[#475367]"/>
            <span className="">Add to Cart</span>
        </button>
    </div>
    </>
  )
}

export default CartBtn