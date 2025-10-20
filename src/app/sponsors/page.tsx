import MainNav from "@/components/mainNav";
import MainFooter from "@/components/mainFooter";
import Link from "next/link";

export default function Sponsors() {
    return (
        <div>
            <header>
                <MainNav />
            </header>
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
                    <div className="md:flex">
                        <div className="flex-shrink-0">
                            <div className="h-64 md:h-full md:w-64 bg-cover bg-center bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuAUM6veSK4IOdY1Yn24k0wJbKlNa7geaZrxE58lbSUEKK9Hd77VE1vd7Dx30L8mJ0YnXzVTFxn7qcILyus_K8TRM4hIqIW6JsVm0dOPlxPmLDxYq2aTG4uS7N-dNtX5znjEp4gCJlWIeIXGW5n6Dknte6xjP0HuDnESUmZlpaYYD2ZUN5Tq5vP3qbBFiPnMniJVMSJKWXsvKQtJtucdNRpfGBWUyh7yTcCB1BiJ8Rhf-wYihvCvmTAJk3SOLclYDCQv3s6juax9Qy0)]">
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-primary font-semibold">Proud Sponsor</div>
                            <h1 className="mt-2 text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Madison Memorial Hospital</h1>

                            <p className="mt-4 text-lg text-gray-600">
                                Madison Memorial Hospital is a leading healthcare provider in the region, offering a wide range of medical services from primary care to specialized treatments. Their commitment to patient care and community health makes them a vital partner in our mission to promote well-being and access to quality healthcare. We are grateful for their support and dedication to improving lives.
                            </p>

                            <div className="mt-6">
                                <Link className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-300" href={"#"}>Visit Their Website</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <MainFooter />
            </footer>
        </div>
    )
}