class AsyncHandler // class
{

    call(editableNode, contentJsNode) // void
    {
        todo('AsyncHandler@call');

        // updateData(editableNode, contentJsNode); // send to backend
        componentActions.stopInlineEdition(editableNode, contentJsNode);
    }
}
const asyncHandler = new AsyncHandler();
