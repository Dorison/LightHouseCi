module.exports = {
  ci: {
    collect: {
      url: ['https://bpe.com.ua/'],
      startServerCommand: 'rails server -e production',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
