/**
 * {@link NodeBuilder} is going to create instances of this class during the build process
 * of nodes. They represent the final shader variables that are going to be generated
 * by the builder. A dictionary of node variables is maintained in {@link NodeBuilder#vars} for
 * this purpose.
 */
declare class NodeVar {
    readonly isNodeVar: true;
    name: string;
    type: string;
    readOnly: boolean;
    /**
     * Constructs a new node variable.
     *
     * @param {String} name - The name of the variable.
     * @param {String} type - The type of the variable.
     * @param {Boolean} [readOnly=false] - The read-only flag.
     */
    constructor(name: string, type: string, readOnly?: boolean);
}
export default NodeVar;
