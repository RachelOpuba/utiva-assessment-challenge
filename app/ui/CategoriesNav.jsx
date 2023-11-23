import Link from "next/link"

const CategoriesNav = () => {
  return (
    <>
    <div className="flex text-sm ">           
                <div className="flex">
                    <Link href={'/'} className="px-1 text-[#EB5017]">Home</Link>
                    <span>/</span>
                </div>
                <div className="flex">
                    <Link href={'/allproducts'} className="px-1 text-[#EB5017]">Women</Link>
                    <span>/</span>
                </div>
                <div className="flex text-[#667185] ">
                    <Link href={'/allproducts'} className="px-1 font-medium">Lifestyle</Link>                   
                </div>
            </div>
    </>
  )
}

export default CategoriesNav