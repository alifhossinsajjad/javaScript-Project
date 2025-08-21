  function deleteMe() {
            document.getElementById("myResult").value = "";
        }

        function calculator(newValue) {
            document.getElementById("myResult").value += newValue;
        }

        function answer () {
            let result = document.getElementById("myResult").value;
            if (result) {
                try {
                    document.getElementById("myResult").value = eval(result);
                } catch (error) {
                    document.getElementById("myResult").value = "Error";
                }
            } else {
                document.getElementById("myResult").value = "Please enter a value";
            }
        }