export default function Footer() {
    return (
        <footer className="bg-black text-white py-12">

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                <div>
                    <h3 className="text-2xl font-bold">
                        ShopSphere
                    </h3>
                    <p className="mt-4 text-gray-400">
                        Premium shopping experience.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-3">
                        Quick Links
                    </h4>
                    <p>Home</p>
                    <p>Products</p>
                    <p>Contact</p>
                </div>

                <div>
                    <h4 className="font-bold mb-3">
                        Support
                    </h4>
                    <p>Help Center</p>
                    <p>Privacy Policy</p>
                    <p>Terms</p>
                </div>

                <div>
                    <h4 className="font-bold mb-3">
                        Contact
                    </h4>
                    <p>support@shopsphere.com</p>
                </div>

            </div>
        </footer>
    );
}