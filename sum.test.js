const { validatePassword } = require('./sum.js');
const forbiddenPasswords = ['password123', 'qwertyuiop'];

describe('validatePassword', () => {
    
    it('returns false when password has fewer than 10 characters', () => {
        expect(validatePassword('aB123456')).toBe(false);
    });
    it('returns false when password has more than 10 characters', () => {
        expect(validatePassword('aB123456789')).toBe(false);
    });

    it('returns false when password contains special characters', () => {
        expect(validatePassword('aB12345@78')).toBe(false);
    });

    it('returns false when password does not have mix of uppercase and lowercase characters', () => {
        expect(validatePassword('ab12345678')).toBe(false);
    });

    it('returns false when password has sequences of ascending or descending digits', () => {
        expect(validatePassword('a12345678A')).toBe(false);
        expect(validatePassword('a88765432A')).toBe(true);
    });

      it('returns false when password is a forbidden password', () => {
        expect(validatePassword('password123', forbiddenPasswords)).toBe(false);
      });

      it('returns false when password does not have at least 4 different digits/characters', () => {
        expect(validatePassword('BBBBcc1111')).toBe(false);
      });
});
