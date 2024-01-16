import {saveAs} from 'file-saver'
import {sha1} from 'object-hash'

export async function uploadJSON(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.onload = event => resolve(JSON.parse(event.target.result))
        fileReader.onerror = error => reject(error)
        fileReader.readAsText(file)
    })
}

export function downloadJSON(object) {
    console.log(JSON.stringify(object))

    saveAs(
        new Blob(
            [JSON.stringify(object)],
            {type: 'application/json'}
        ),
        Date.now() + sha1(object) + '.json'
    )
}