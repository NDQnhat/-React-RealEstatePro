import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiClock } from "react-icons/hi";

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-(--color-cream) to-white flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          {/* Icon */}
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-linear-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <HiClock className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-[#083344] mb-3">
              Quên mật khẩu
            </h2>
            <p className="text-muted">Tính năng đang được phát triển</p>
          </div>

          {/* Coming Soon Message */}
          <div className="bg-(--color-pastel) rounded-2xl p-6 mb-6 text-center">
            <div className="mb-4">
              <svg
                className="w-16 h-16 mx-auto text-(--color-primary)"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-bold text-[#083344] mb-2">
              Coming Soon
            </h3>
            <p className="text-muted mb-4">
              Xin lỗi, chúng tôi đang cập nhật tính năng này.
            </p>
            <div className="bg-white rounded-lg p-4 text-sm text-muted">
              <p className="mb-2">
                Tính năng khôi phục mật khẩu hiện đang trong quá trình phát
                triển và sẽ sớm được ra mắt.
              </p>
              <p>
                Nếu bạn cần hỗ trợ khẩn cấp, vui lòng liên hệ với quản trị viên
                qua email hoặc số hotline của chúng tôi.
              </p>
            </div>
          </div>

          {/* Error Code */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-center">
            <p className="text-red-600 font-mono text-sm">
              <span className="font-semibold">Status:</span> 403 Forbidden
            </p>
            <p className="text-red-500 text-xs mt-1">
              Tính năng chưa được kích hoạt
            </p>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <h4 className="font-semibold text-[#083344] mb-3 text-center">
              📞 Liên hệ hỗ trợ
            </h4>
            <div className="space-y-2 text-sm text-muted">
              <p>
                <strong>Email:</strong> support@naturepeak.com
              </p>
              <p>
                <strong>Hotline:</strong> 1900-xxxx
              </p>
              <p>
                <strong>Giờ làm việc:</strong> 8:00 - 17:00 (T2-T6)
              </p>
            </div>
          </div>

          {/* Back to Login Button */}
          <Link
            to="/login"
            className="w-full btn-primary py-4 text-lg font-semibold flex items-center justify-center gap-2"
          >
            <HiArrowLeft className="w-5 h-5" />
            Quay lại đăng nhập
          </Link>

          {/* Additional Links */}
          <div className="mt-6 text-center space-y-2">
            <p className="text-muted text-sm">
              Hoặc bạn có thể{" "}
              <Link
                to="/register"
                className="text-(--color-primary) hover:underline font-semibold"
              >
                Đăng ký tài khoản mới
              </Link>
            </p>
            <p className="text-muted text-sm">
              <Link
                to="/support"
                className="text-(--color-primary) hover:underline"
              >
                Trung tâm hỗ trợ
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
