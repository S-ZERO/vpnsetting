document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.checkbox');
    const submitButton = document.getElementById('submit-button');
    
    function checkAllBoxes() {
        let allChecked = true;
        checkboxes.forEach(checkbox => {
            if (!checkbox.checked) {
                allChecked = false;
            }
        });
        return allChecked;
    }

    function updateButtonState() {
        if (checkAllBoxes()) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    // 初期状態でボタンを設定
    updateButtonState();

    // チェックボックスの状態が変更されるたびにボタンの状態を更新
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateButtonState);
    });

    // ボタンがクリックされたときに次の画面へ遷移
    submitButton.addEventListener('click', function() {
        window.location.href = 'process.html'; // 次のページのURLに変更
    });
});
