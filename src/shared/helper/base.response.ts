import {Request,Response} from 'express';

export class BaseResponse
{
    static success(req:Request,res:Response,data:any)
    {
        let msg,status;
        switch(req.method)
        {
            case 'GET':
                {
                    status = 200;
                    msg = 'Lấy dữ liệu thành công';
                    break;
                }
            case 'POST':
                {
                    status = 201;
                    msg = 'Thêm dữ liệu thành công';
                    break;
                }
            case 'PUT':
                {
                    status = 200;
                    msg = 'Cập nhật dữ liệu thành công';
                    break;
                }
            case 'DELETE':
                {
                    status = 200;
                    msg = 'Xóa dữ liệu thành công';
                    break;
                }
            default:
                {
                    status = 404;
                    msg = 'Không có resoure được mô tả';
                    break;
                }
        }
        return res.status(200).json({
            success:true,
            status:status,
            msg:msg,
            data:data
        })
    }
}