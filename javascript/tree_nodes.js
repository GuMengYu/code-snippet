/**
 * 过滤树节点
 * @param treeData
 * @param value
 * @param key
 * @returns {*[]}
 */
export function filterTreeData(treeData, value, key = 'id') {
    function traverse(nodes) {
        const filteredNodes = []

        for (const node of nodes) {
            if (node[key] === value) {
                continue // 跳过指定节点及其子节点
            }

            const newNode = { ...node } // 创建新节点，可根据需要进行深拷贝或其他处理
            if (newNode.children) {
                newNode.children = traverse(newNode.children) // 递归遍历子节点
            }

            filteredNodes.push(newNode)
        }

        return filteredNodes
    }

    return traverse(treeData)
}

/**
 * 查找树节点的父节点
 * @param treeData
 * @param nodeId
 * @returns {未找到匹配节点的父节点}
 */
export function findParentNode(treeData, nodeId) {
    let parentNode = null

    function traverse(nodes) {
        for (const node of nodes) {
            if (node.id === nodeId) {
                return parentNode // 返回匹配节点的父节点
            }

            if (node.children) {
                parentNode = node // 保存当前节点为父节点
                const foundNode = traverse(node.children) // 递归遍历子节点
                if (foundNode) {
                    return foundNode // 如果找到匹配节点，则直接返回
                }
                parentNode = null // 如果未找到匹配节点，则重置父节点
            }
        }

        return null // 未找到匹配节点的父节点
    }

    return traverse(treeData)
}
