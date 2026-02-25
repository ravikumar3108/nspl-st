import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AllProducts() {

    const [api, setApi] = useState([]);
    console.log(api);

    async function handleSubmit(e) {
        let data = await axios
            .get("http://localhost:8000/product/allproduct")
            .then((res) => {
                setApi(res.data.data);
            });
    }

    useEffect(() => {
        handleSubmit()
    }, [])

    const [update, setUpdate] = useState(null)
    const UpdateProduct = ({ item, index }) => {
        const [title, setTitle] = useState(item.title)
        console.log(title)
        const [description, setDescription] = useState(item.description)
        const [price, setPrice] = useState(item.price)


        const updateData = () => {
            const res = axios.post("", { title, description, price })
        }

        return (
            <>
                <button onClick={() => setUpdate(index)}>Update</button>
                {update == index ? (<>

                    <form action="" enctype="multipart/form-data">
                        <label htmlFor="">Title</label> <br />
                        <input
                            type="text"
                            name="title"
                            id="title"
                            defaultValue={item.title}
                            onChange={(e) => setTitle(e.target.value)}
                        /> <br /> <br />
                        <label htmlFor="">description</label> <br />
                        <input
                            type="text"
                            name="description"
                            id=""
                            defaultValue={item.description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <br /> <br />
                        <label htmlFor="">Price</label> <br />
                        <input
                            type="text"
                            name="Price"
                            id=""
                            defaultValue={item.price}
                            onChange={(e) => setPrice(e.target.value)}
                        /> <br /> <br />
                        <input
                            type="file"
                            name="image"
                            id=""
                        />
                        <button type="submit">Submit</button>
                    </form>

                </>) : ""}

            </>
        )

    }

    return (
        <>
            <h1>Admin Dashboard</h1>

            <table>
                <tr>
                    <th>S.NO</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Button</th>
                </tr>
                {api.map((item, index) => {
                    return (
                        <>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>
                                    <button>Delete</button>
                                    <UpdateProduct item={item} index={index} />
                                </td>
                            </tr>
                        </>
                    )
                })}
            </table>
        </>
    )
}

export default AllProducts
