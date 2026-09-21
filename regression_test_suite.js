const { login } = require('./auth');

describe('Regression Test - Authentication Edge Cases & Exception Handling', () => {
  
  test('Thất bại khi nhập sai mật khẩu', () => {
    expect(() => {
      login('admin', 'wrong_password');
    }).toThrow('Mật khẩu không chính xác');
  });

  test('Thất bại khi để trống username', () => {
    expect(() => {
      login('', '123');
    }).toThrow('Username và password không được để trống');
  });

  test('Thất bại khi để trống password', () => {
    expect(() => {
      login('admin', '');
    }).toThrow('Username và password không được để trống');
  });

  test('Thất bại khi mật khẩu chứa ký tự đặc biệt không hợp lệ', () => {
    expect(() => {
      login('admin', '123$%');
    }).toThrow('Mật khẩu chứa ký tự đặc biệt không cho phép');
  });

  test('Thất bại khi đăng nhập bằng tài khoản đang bị khóa', () => {
    expect(() => {
      login('user1', 'password123');
    }).toThrow('Tài khoản đã bị khóa');
  });

  test('Thất bại khi tài khoản không tồn tại', () => {
    expect(() => {
      login('non_existing_user', '123');
    }).toThrow('Tài khoản không tồn tại');
  });

});