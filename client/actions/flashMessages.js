/**
 * Created by User on 10/20/2016.
 */
import { ADD_FLASH_MESSAGE } from './types'

export function addFlashMessage(message) {
    return {
        type: ADD_FLASH_MESSAGE,
        message
    }
}