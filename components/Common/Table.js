import { Badge } from "@chakra-ui/react";

export default function Table() {
    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Mã đơn hàng
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Sản phẩm
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Trạng thái
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Thành tiền
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                            scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            DH112233
                        </th>
                        <td className="py-4 px-6">
                            Áo Thun ICON DENIM Good Basic <br /> Quần Jeans Wash ICON DENIM Light Gray <br /> Vớ Cổ Thấp
                            BOUTON
                        </td>
                        <td className="py-4 px-6">
                            <Badge variant="outline" colorScheme="green">
                                Đã xác nhận
                            </Badge>
                        </td>
                        <td className="py-4 px-6">500.000VND</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                            scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            DH445566
                        </th>
                        <td className="py-4 px-6">
                            Áo Thun ICON DENIM Good Basic <br /> Quần Jeans Wash ICON DENIM Light Gray <br /> Vớ Cổ Thấp
                            BOUTON
                        </td>
                        <td className="py-4 px-6">
                            <Badge variant="outline" colorScheme="red">
                                Đã hủy
                            </Badge>
                        </td>
                        <td className="py-4 px-6">500.000VND</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
