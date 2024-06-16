(function() {
    const buttons = document.querySelectorAll('.btn');
    const storeItems = document.querySelectorAll('.store-item');

    buttons.forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();
            const filter = e.target.dataset.filter.toLowerCase();

            storeItems.forEach(item => {
                if (filter === 'all') {
                    item.classList.remove('hidden');
                } else {
                    if (item.classList.contains(filter)) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                }
            });
        });
    });
})();
