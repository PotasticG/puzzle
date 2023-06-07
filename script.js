// Shuffle the puzzle pieces randomly
function shufflePieces() {
    var puzzleContainer = document.getElementById("puzzleContainer");
    for (var i = puzzleContainer.children.length; i >= 0; i--) {
        puzzleContainer.appendChild(puzzleContainer.children[Math.random() * i | 0]);
    }
}

// Check if the puzzle is complete
function checkComplete() {
    var puzzleContainer = document.getElementById("puzzleContainer");
    var puzzlePieces = puzzleContainer.getElementsByClassName("puzzle-piece");
    for (var i = 0; i < puzzlePieces.length; i++) {
        var pieceId = puzzlePieces[i].id;
        if (pieceId !== "piece" + (i + 1)) {
            return false;
        }
    }
    return true;
}

// Add click event listeners to the puzzle pieces
function addListeners() {
    var puzzleContainer = document.getElementById("puzzleContainer");
    var puzzlePieces = puzzleContainer.getElementsByClassName("puzzle-piece");
    for (var i = 0; i < puzzlePieces.length; i++) {
        puzzlePieces[i].addEventListener("click", function() {
            var selectedPieceId = this.id;
            var emptyPieceId = puzzleContainer.querySelector(".puzzle-piece:empty").id;

            // Swap the background positions of the selected piece and the empty piece
            var selectedPiece = document.getElementById(selectedPieceId);
            var emptyPiece = document.getElementById(emptyPieceId);
            var temp = selectedPiece.style.backgroundPosition;
            selectedPiece.style.backgroundPosition = emptyPiece.style.backgroundPosition;
            emptyPiece.style.backgroundPosition = temp;

            // Swap the IDs of the selected piece and the empty piece
            selectedPiece.id = emptyPieceId;
            emptyPiece.id = selectedPieceId;

            // Check if the puzzle is complete
            if (checkComplete()) {
                alert("Congratulations! You solved the puzzle!");
            }
        });
    }
}

// Start the puzzle game
function startGame() {
    shufflePieces();
    addListeners();
}

// Call the startGame function when the page finishes loading
window.onload = startGame;
