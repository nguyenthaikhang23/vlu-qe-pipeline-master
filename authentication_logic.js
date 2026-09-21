/**
 * Hàm xử lý đăng nhập cơ bản
 * @param {string} username 
 * @param {string} password 
 * @returns {boolean}
 */
function login(username, password) {
  // Kiểm tra username hoặc password trống
  if (!username || !password) {
    throw new Error('Username và password không được để trống');
  }

  // Danh sách tài khoản mẫu (giả lập database)
  const users = [
    { username: 'admin', password: '123', isLocked: false },
    { username: 'user1', password: 'password123', isLocked: true }
  ];

  // Kiểm tra ký tự đặc biệt trong password (ví dụ: cấm các ký tự <, >, $, %)
  const specialCharsRegex = /[<>$%]/;
  if (specialCharsRegex.test(password)) {
    throw new Error('Mật khẩu chứa ký tự đặc biệt không cho phép');
  }

  // Tìm người dùng
  const user = users.find(u => u.username === username);

  if (!user) {
    throw new Error('Tài khoản không tồn tại');
  }

  if (user.isLocked) {
    throw new Error('Tài khoản đã bị khóa');
  }

  if (user.password !== password) {
    throw new Error('Mật khẩu không chính xác');
  }

  return true;
}

module.exports = { login };