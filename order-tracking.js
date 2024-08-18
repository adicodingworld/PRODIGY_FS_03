document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tracking-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const orderId = document.getElementById('order-id').value;
        const orderStatus = document.getElementById('order-status');

        // Mock order status data
        const mockStatus = {
            '12345': 'Shipped',
            '67890': 'Delivered',
            '11223': 'Pending'
        };

        const status = mockStatus[orderId] || 'Order ID not found';
        orderStatus.innerHTML = `<p>Status: ${status}</p>`;
    });
});
